/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CityService } from "../city.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CityCreateInput } from "./CityCreateInput";
import { City } from "./City";
import { CityFindManyArgs } from "./CityFindManyArgs";
import { CityWhereUniqueInput } from "./CityWhereUniqueInput";
import { CityUpdateInput } from "./CityUpdateInput";
import { VisitFindManyArgs } from "../../visit/base/VisitFindManyArgs";
import { Visit } from "../../visit/base/Visit";
import { VisitWhereUniqueInput } from "../../visit/base/VisitWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CityControllerBase {
  constructor(
    protected readonly service: CityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: City })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCity(@common.Body() data: CityCreateInput): Promise<City> {
    return await this.service.createCity({
      data: data,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [City] })
  @ApiNestedQuery(CityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async cities(@common.Req() request: Request): Promise<City[]> {
    const args = plainToClass(CityFindManyArgs, request.query);
    return this.service.cities({
      ...args,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async city(
    @common.Param() params: CityWhereUniqueInput
  ): Promise<City | null> {
    const result = await this.service.city({
      where: params,
      select: {
        createdAt: true,
        id: true,
        latitude: true,
        longitude: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCity(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() data: CityUpdateInput
  ): Promise<City | null> {
    try {
      return await this.service.updateCity({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          latitude: true,
          longitude: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: City })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCity(
    @common.Param() params: CityWhereUniqueInput
  ): Promise<City | null> {
    try {
      return await this.service.deleteCity({
        where: params,
        select: {
          createdAt: true,
          id: true,
          latitude: true,
          longitude: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/visits")
  @ApiNestedQuery(VisitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Visit",
    action: "read",
    possession: "any",
  })
  async findVisits(
    @common.Req() request: Request,
    @common.Param() params: CityWhereUniqueInput
  ): Promise<Visit[]> {
    const query = plainToClass(VisitFindManyArgs, request.query);
    const results = await this.service.findVisits(params.id, {
      ...query,
      select: {
        city: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        visitDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/visits")
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  async connectVisits(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() body: VisitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visits: {
        connect: body,
      },
    };
    await this.service.updateCity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/visits")
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  async updateVisits(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() body: VisitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visits: {
        set: body,
      },
    };
    await this.service.updateCity({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/visits")
  @nestAccessControl.UseRoles({
    resource: "City",
    action: "update",
    possession: "any",
  })
  async disconnectVisits(
    @common.Param() params: CityWhereUniqueInput,
    @common.Body() body: VisitWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visits: {
        disconnect: body,
      },
    };
    await this.service.updateCity({
      where: params,
      data,
      select: { id: true },
    });
  }
}