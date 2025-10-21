import { useQuery } from "@tanstack/react-query";
import { CarDesign, CarDesignSearchItem } from "./types";

async function getDesignById(id: string): Promise<CarDesign | null> {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/designs/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

async function getDesignFeed(): Promise<CarDesignSearchItem[] | null> {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/designs`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export const useDesignById = (id: string) => {
    return useQuery({
        queryKey: ['design', id],
        queryFn: () => getDesignById(id),
        enabled: !!id,
    });
};

export const useDesignFeed = () => {
    return useQuery({
        queryKey: [''],
        queryFn: () => getDesignFeed(),
    });
};
