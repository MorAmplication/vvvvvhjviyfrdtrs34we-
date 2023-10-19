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
import { OrderService } from "../order.service";
import { Public } from "../../decorators/public.decorator";
import { OrderCreateInput } from "./OrderCreateInput";
import { OrderWhereInput } from "./OrderWhereInput";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { Order } from "./Order";

export class OrderControllerBase {
  constructor(protected readonly service: OrderService) {}
  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  async create(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.create({
      data: {
        ...data,

        customer: {
          connect: data.customer
        }
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        customer: {
          select: {
            id: true
          }
        },

        status: true,
        label: true
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        customer: {
          select: {
            id: true
          }
        },

        status: true,
        label: true
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(@common.Param() params: OrderWhereUniqueInput): Promise<Order | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,

        customer: {
          select: {
            id: true
          }
        },

        status: true,
        label: true
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @Public()
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          customer: {
            connect: data.customer
          }
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          customer: {
            select: {
              id: true
            }
          },

          status: true,
          label: true
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

  @Public()
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(@common.Param() params: OrderWhereUniqueInput): Promise<Order | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,

          customer: {
            select: {
              id: true
            }
          },

          status: true,
          label: true
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
}