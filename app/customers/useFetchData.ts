import { useState, useCallback, useEffect } from "react";

// Custom hook to handle data fetching
const useFetchData = (url: string, defaultData: any) => {
    const [data, setData] = useState(defaultData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await response.json();

            setData({
                imageUrl:
                    result.image || defaultData.imageUrl,
                author: result.author || defaultData.author,
                time: result.time || defaultData.time,
                description:
                    result.description ||
                    defaultData.description,
                likes: result.likes || defaultData.likes,
                comments:
                    result.comments || defaultData.comments,
            });
        } catch (error: any) {
            setError(
                "Failed to load data, showing default content."
            );
        } finally {
            setLoading(false);
        }
    }, [url, defaultData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, retry: fetchData };
};

export default useFetchData;
