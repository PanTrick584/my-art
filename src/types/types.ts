export interface Text {
    default: string;
    pl: string;
}

export interface ArtworkItem {
    title: Text;
    date: string;
    images: string[];
    type: string;
    point: Text;
}

export type ArtworksType = ArtworkItem[];