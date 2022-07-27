import { HorizontalAlignmentOptions } from './HorizontalAlignmentOptions';
import { VerticalAlignmentOptions } from './VerticalAlignmentOptions';

export enum TextAlignmentOptions
{
    TopLeft = HorizontalAlignmentOptions.Left | VerticalAlignmentOptions.Top,
    Top = HorizontalAlignmentOptions.Center | VerticalAlignmentOptions.Top,
    TopRight = HorizontalAlignmentOptions.Right | VerticalAlignmentOptions.Top,
    TopJustified = HorizontalAlignmentOptions.Justified | VerticalAlignmentOptions.Top,
    TopFlush = HorizontalAlignmentOptions.Flush | VerticalAlignmentOptions.Top,
    TopGeoAligned = HorizontalAlignmentOptions.Geometry | VerticalAlignmentOptions.Top,

    Left = HorizontalAlignmentOptions.Left | VerticalAlignmentOptions.Middle,
    Center = HorizontalAlignmentOptions.Center | VerticalAlignmentOptions.Middle,
    Right = HorizontalAlignmentOptions.Right | VerticalAlignmentOptions.Middle,
    Justified = HorizontalAlignmentOptions.Justified | VerticalAlignmentOptions.Middle,
    Flush = HorizontalAlignmentOptions.Flush | VerticalAlignmentOptions.Middle,
    CenterGeoAligned = HorizontalAlignmentOptions.Geometry | VerticalAlignmentOptions.Middle,

    BottomLeft = HorizontalAlignmentOptions.Left | VerticalAlignmentOptions.Bottom,
    Bottom = HorizontalAlignmentOptions.Center | VerticalAlignmentOptions.Bottom,
    BottomRight = HorizontalAlignmentOptions.Right | VerticalAlignmentOptions.Bottom,
    BottomJustified = HorizontalAlignmentOptions.Justified | VerticalAlignmentOptions.Bottom,
    BottomFlush = HorizontalAlignmentOptions.Flush | VerticalAlignmentOptions.Bottom,
    BottomGeoAligned = HorizontalAlignmentOptions.Geometry | VerticalAlignmentOptions.Bottom,

    BaselineLeft = HorizontalAlignmentOptions.Left | VerticalAlignmentOptions.Baseline,
    Baseline = HorizontalAlignmentOptions.Center | VerticalAlignmentOptions.Baseline,
    BaselineRight = HorizontalAlignmentOptions.Right | VerticalAlignmentOptions.Baseline,
    BaselineJustified = HorizontalAlignmentOptions.Justified | VerticalAlignmentOptions.Baseline,
    BaselineFlush = HorizontalAlignmentOptions.Flush | VerticalAlignmentOptions.Baseline,
    BaselineGeoAligned = HorizontalAlignmentOptions.Geometry | VerticalAlignmentOptions.Baseline,

    MidlineLeft = HorizontalAlignmentOptions.Left | VerticalAlignmentOptions.Geometry,
    Midline = HorizontalAlignmentOptions.Center | VerticalAlignmentOptions.Geometry,
    MidlineRight = HorizontalAlignmentOptions.Right | VerticalAlignmentOptions.Geometry,
    MidlineJustified = HorizontalAlignmentOptions.Justified | VerticalAlignmentOptions.Geometry,
    MidlineFlush = HorizontalAlignmentOptions.Flush | VerticalAlignmentOptions.Geometry,
    MidlineGeoAligned = HorizontalAlignmentOptions.Geometry | VerticalAlignmentOptions.Geometry,

    CaplineLeft = HorizontalAlignmentOptions.Left | VerticalAlignmentOptions.Capline,
    Capline = HorizontalAlignmentOptions.Center | VerticalAlignmentOptions.Capline,
    CaplineRight = HorizontalAlignmentOptions.Right | VerticalAlignmentOptions.Capline,
    CaplineJustified = HorizontalAlignmentOptions.Justified | VerticalAlignmentOptions.Capline,
    CaplineFlush = HorizontalAlignmentOptions.Flush | VerticalAlignmentOptions.Capline,
    CaplineGeoAligned = HorizontalAlignmentOptions.Geometry | VerticalAlignmentOptions.Capline
}
