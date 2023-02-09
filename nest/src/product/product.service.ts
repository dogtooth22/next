import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Proyecto, ProyectoDocument } from './schemas/product.schema';
import { CreateProyectoDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Proyecto.name) private proyectoModel: Model<ProyectoDocument>) {}

    async create(createProyectoDTO: CreateProyectoDTO): Promise<Proyecto> {
        const proyectoCreado = new this.proyectoModel(createProyectoDTO);
        return proyectoCreado.save();
    }

    async findAll(): Promise<Proyecto[]> {
        return this.proyectoModel.find().exec();
    }

    async getProject(idProyecto?: string): Promise<Proyecto> {
        const proyecto = await this.proyectoModel.findById(idProyecto);
        return proyecto;
    }

    async borrarProyecto(idProyecto: string): Promise<Proyecto> {
        const proyectoBorrado = await this.proyectoModel.findByIdAndDelete(idProyecto);
        return proyectoBorrado;
    }

    async actualizarProyecto(idProyecto: string, createProyectoDTO: CreateProyectoDTO): Promise<Proyecto> {
        const proyectoActualizado = await this.proyectoModel.findByIdAndUpdate(idProyecto,
            createProyectoDTO, { new: true });
        return proyectoActualizado;
    }
}
