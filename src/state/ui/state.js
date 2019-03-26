// @Flow

import { ServiceTypeDto, ServiceDto } from "../../proxy/dtos";
export interface UiState {
  loading: boolean;
}

export const UiInitialState: UiState = {
  loading: false
};
