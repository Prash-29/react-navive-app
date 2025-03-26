import { createSlice, Slice } from "@reduxjs/toolkit";

interface IState {
  userName: string;
  serviceStatus: boolean;
  deviceIdentifier: number;
  serverUrl: string;
  locationAccuracy: string;
  frequency: number;
  distance: number;
  angle: number;
  offlineBuffering: boolean;
}

const initialState: IState = {
  userName: "",
  serviceStatus: false,
  deviceIdentifier: 0,
  serverUrl: "",
  locationAccuracy: 'low',
  frequency: 2,
  distance: 10,
  angle: 0,
  offlineBuffering: false,
};

const configSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateServiceStatus: (state: IState, action) => {
      state.serviceStatus = action.payload;
    },
    updateUserName: (state: IState, action) => {
      state.userName = action.payload;
    },
    updateServerUrl: (state: IState, action) => {
      state.serverUrl = action.payload;
    },
    updateLocationAccuracy: (state: IState, action) => {
      state.locationAccuracy = action.payload;
    },
    updateFrequency: (state: IState, action) => {
      state.frequency = action.payload;
    },
    updatedistance: (state: IState, action) => {
      state.distance = action.payload;
    },
    updateAngle: (state: IState, action) => {
      state.angle = action.payload;
    },
    updateOfflineBuffering: (state: IState, action) => {
      state.offlineBuffering = action.payload;
    },
  },
});

export const {
  updateAngle,
  updateFrequency,
  updateLocationAccuracy,
  updateOfflineBuffering,
  updateServerUrl,
  updateServiceStatus,
  updateUserName,
  updatedistance,
} = configSlice.actions;

export default configSlice.reducer;
