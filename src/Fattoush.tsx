import React from 'react';
import {JSONSchema7} from "json-schema";

export type DataComponent = () => React.ReactNode;

type DataIn = { [k: string]: any };

export type DataOut<D extends DataIn> = {
    [K in keyof D]: D[K] extends {}
        ? DataOut<D[K]>
        : DataComponent;
};

type DataConfigResolver = (schema: JSONSchema7) => React.ReactNode;

type DataConfig<D extends DataIn> = {
    [K in keyof D]?: D[K] extends {}
        ? DataConfig<D[K]>
        : DataConfigResolver;
};

export class Fattoush<DI extends DataIn> {

    private readonly schema: JSONSchema7;
    private readonly config: DataConfig<DI>;
    private out?: DataOut<DI>;

    constructor(schema: JSONSchema7) {
        this.schema = schema;
        this.config = {};
    }

    setConfig(config: DataConfig<DI>): this {
        delete this.out;



        return this;
    }

    generate(): DataOut<DI> {
        this.out = this.onGenerate();
        return this.out;
    }

    private onGenerate(): DataOut<DI> {
        throw new Error('Not implemented');
    }

    private getOutFromSchema<D extends DataIn>(schema: JSONSchema7): DataOut<D> {
        const out: Partial<DataOut<D>> = {};

        switch(schema.type) {
            case 'object':

        }
        throw new Error('Not implemented');
    }

}