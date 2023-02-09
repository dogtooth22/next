import { Controller, Get, Post, Put, Delete, Res, Req, Body, Param, Query, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateProyectoDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Post('/create')
    async createPost(@Res() res, @Body() createProyectoDTO: CreateProyectoDTO) {
        const projects = await this.productService.findAll();
        let flag = false;
        Object.entries(projects).forEach(([key, value], index) => {
          if (createProyectoDTO.codigo == value.codigo) {
            flag = true;
            return;
          }
          if (createProyectoDTO.nombre == value.nombre) {
            flag = true;
            return;
          }
        });
        if (!flag) {
          const project = await this.productService.create(createProyectoDTO);
          return res.status(HttpStatus.OK).json({
            mensaje: 'received',
            proyecto: project
          });
        }
    }

    @Get('/')
    async getProyects(@Res() res) {
        const projects = await this.productService.findAll();
        return res.status(HttpStatus.OK).json({
            proyectos: projects,
        })
    }

    @Get('/:idProyecto')
    async getProject(@Res() res, @Param('idProyecto') idProyecto){
        const project = await this.productService.getProject(idProyecto);
        if (!project) {
            throw new NotFoundException('Proyecto no existe');
        }
        return res.status(HttpStatus.OK).json(project);
    }

    @Delete('/delete')
    async deleteProject(@Res() res, @Query('idProyecto') idProyecto) {
        const proyectoBorrado = await this.productService.borrarProyecto(idProyecto);
        if (!proyectoBorrado) {
            throw new NotFoundException('Proyecto no existe');
        }
        return res.status(HttpStatus.OK).json({
            message: 'Proyecto borrado exitosamente',
            proyectoBorrado,
        });
    }

}
