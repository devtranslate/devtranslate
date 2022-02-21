type ElevationLevels = 'none' | 'inner' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

export type ElevationMap<T> = { [level in ElevationLevels]: T };

export type Elevations = ElevationMap<string>;
