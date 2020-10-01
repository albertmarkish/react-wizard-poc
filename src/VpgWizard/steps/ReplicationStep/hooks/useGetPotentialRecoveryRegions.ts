import { useEffect, useState } from 'react';
import { IRecoveryRegion } from "../types";

export function useGetPotentialRecoveryRegions() {
    const [potentialRegions, setPotentialRegions] = useState<Array<IRecoveryRegion>>([]);

    const fetchMockData = (): Promise<Array<IRecoveryRegion>> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: "region_001", name: "Far East Region" },
                    { id: "region_002", name: "South West Region" },
                    { id: "region_003", name: "Polar Region" },
                    { id: "region_004", name: "South America Region" },
                ]);
            }, 250);
        });
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const result = await fetchMockData();
                setPotentialRegions(result);
            } catch (ex) {
                alert(ex);
            }
        }
        fetch();
    }, []);

    return potentialRegions;
}