namespace tmpro
{
    /**
     * Base class inherited by the various TextMeshPro Assets.
     */
    export class TMP_Asset
    {
        /**
         * HashCode based on the name of the asset.
         */
        hashCode: number;

        /**
         * The material used by this asset.
         */
        material: feng3d.Material;

        /**
         * HashCode based on the name of the material assigned to this asset.
         */
        materialHashCode: number;

    }
}