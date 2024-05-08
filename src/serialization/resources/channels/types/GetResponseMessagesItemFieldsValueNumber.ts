/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as DoptApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetResponseMessagesItemFieldsValueNumber: core.serialization.ObjectSchema<
    serializers.GetResponseMessagesItemFieldsValueNumber.Raw,
    DoptApi.GetResponseMessagesItemFieldsValueNumber
> = core.serialization.object({
    sid: core.serialization.string(),
    value: core.serialization.number().optional(),
});

export declare namespace GetResponseMessagesItemFieldsValueNumber {
    interface Raw {
        sid: string;
        value?: number | null;
    }
}
