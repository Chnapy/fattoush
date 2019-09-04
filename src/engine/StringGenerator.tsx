import {JSONSchema7} from "json-schema";
import {DataComponent} from "Fattoush";
import React from "react";

export class StringGenerator {

    generate(schema: JSONSchema7 & { type: 'string' }): DataComponent {

        if (schema.enum) {
            return this.generateSelect(schema);
        }

        return this.generateInput(schema);
    }

    private generateInput(schema: JSONSchema7 & { type: 'string' }): DataComponent {

        const {minLength, format, maxLength, pattern, readOnly, writeOnly} = schema;

        const _default = schema.default;

        const type = writeOnly
            ? 'password'
            : 'text';

        return () => (
            <input type={type} minLength={minLength} maxLength={maxLength} pattern={pattern} readOnly={readOnly} defaultValue={String(_default)} />
        );
    }

    private generateSelect(schema: JSONSchema7 & { type: 'string' }): DataComponent {

        const {readOnly} = schema;

        const _enum = schema.enum;
        const _default = schema.default;

        const options = _enum
            ? _enum.map(e => (
                <option value={String(e)} selected={e === _default}>e</option>
            ))
            : [];

        return () => (
            <select disabled={readOnly}>
                {options}
            </select>
        );
    }

}
