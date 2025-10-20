import { useQuery } from "@tanstack/react-query";
import { CarDesign } from "./types";

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

export const useDesignById = (id: string) => {
    return useQuery({
        queryKey: ['design', id],
        queryFn: () => getDesignById(id),
        enabled: !!id,
    });
};
