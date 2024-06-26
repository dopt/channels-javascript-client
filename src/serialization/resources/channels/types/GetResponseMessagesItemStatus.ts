/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as DoptApi from "../../../../api/index";
import * as core from "../../../../core";

export const GetResponseMessagesItemStatus: core.serialization.Schema<
    serializers.GetResponseMessagesItemStatus.Raw,
    DoptApi.GetResponseMessagesItemStatus
> = core.serialization.enum_(["Aborted", "Completed", "Created", "Engaged", "Qualified", "Queued", "Seen", "Sent"]);

export declare namespace GetResponseMessagesItemStatus {
    type Raw = "Aborted" | "Completed" | "Created" | "Engaged" | "Qualified" | "Queued" | "Seen" | "Sent";
}
