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
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async create(
    @common.Body() data: UserCreateInput
  ): Promise<User> {
    return await this.service.create({
      data: {
        ...data,

        manager: data.manager ? {
          connect: data.manager
        } : undefined,

        profile: data.profile ? {
          connect: data.profile
        } : undefined
      },
      select: {
        id: true,
        name: true,
        bio: true,
        email: true,
        age: true,
        birthDate: true,
        score: true,

        manager: {
          select: {
            id: true
          }
        },

        interests: true,
        priority: true,
        isCurious: true,
        location: true,
        extendedProperties: true,

        profile: {
          select: {
            id: true
          }
        }
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async findMany(
    @common.Req() request: Request
  ): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        name: true,
        bio: true,
        email: true,
        age: true,
        birthDate: true,
        score: true,

        manager: {
          select: {
            id: true
          }
        },

        interests: true,
        priority: true,
        isCurious: true,
        location: true,
        extendedProperties: true,

        profile: {
          select: {
            id: true
          }
        }
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        name: true,
        bio: true,
        email: true,
        age: true,
        birthDate: true,
        score: true,

        manager: {
          select: {
            id: true
          }
        },

        interests: true,
        priority: true,
        isCurious: true,
        location: true,
        extendedProperties: true,

        profile: {
          select: {
            id: true
          }
        }
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          manager: data.manager ? {
            connect: data.manager
          } : undefined,

          profile: data.profile ? {
            connect: data.profile
          } : undefined
        },
        select: {
          id: true,
          name: true,
          bio: true,
          email: true,
          age: true,
          birthDate: true,
          score: true,

          manager: {
            select: {
              id: true
            }
          },

          interests: true,
          priority: true,
          isCurious: true,
          location: true,
          extendedProperties: true,

          profile: {
            select: {
              id: true
            }
          }
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          name: true,
          bio: true,
          email: true,
          age: true,
          birthDate: true,
          score: true,

          manager: {
            select: {
              id: true
            }
          },

          interests: true,
          priority: true,
          isCurious: true,
          location: true,
          extendedProperties: true,

          profile: {
            select: {
              id: true
            }
          }
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

  @common.Get("/:id/employees")
  @ApiNestedQuery(UserFindManyArgs)
  async findManyEmployees(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findEmployees(params.id, {
      ...query,
      select: {
        id: true,
        name: true,
        bio: true,
        email: true,
        age: true,
        birthDate: true,
        score: true,

        manager: {
          select: {
            id: true
          }
        },

        interests: true,
        priority: true,
        isCurious: true,
        location: true,
        extendedProperties: true,

        profile: {
          select: {
            id: true
          }
        }
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/employees")
  async connectEmployees(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/employees")
  async updateEmployees(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/employees")
  async disconnectEmployees(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      employees: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/organizations")
  @ApiNestedQuery(OrganizationFindManyArgs)
  async findManyOrganizations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganizations(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/organizations")
  async connectOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/organizations")
  async updateOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/organizations")
  async disconnectOrganizations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}