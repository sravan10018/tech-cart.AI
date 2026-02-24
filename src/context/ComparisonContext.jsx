import { createContext, useContext, useState, useEffect } from 'react';
import { MOBILE_CATALOG, LAPTOP_CATALOG } from '../data/catalog';

const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
    const [comparisonList, setComparisonList] = useState(() => {
        const saved = localStorage.getItem('tech_cart_comparison');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('tech_cart_comparison', JSON.stringify(comparisonList));
    }, [comparisonList]);

    const addToComparison = (item) => {
        if (comparisonList.find(i => i.id === item.id)) return false;

        const itemToStore = {
            id: item.id,
            name: item.name,
            price: item.price,
            specs: { ...item.specs },
            category: item.category,
            type: item.type,
            image: item.image,
            rating: item.rating,
            verdict: item.verdict
        };

        setComparisonList(prev => [...prev, itemToStore]);
        return true;
    };

    const addToComparisonById = (id) => {
        const item = [...MOBILE_CATALOG, ...LAPTOP_CATALOG].find(i => i.id === id);
        if (item) {
            return addToComparison(item);
        }
        return false;
    };

    const addToComparisonByIds = (ids) => {
        const all = [...MOBILE_CATALOG, ...LAPTOP_CATALOG];
        const itemsToAdd = ids
            .map(id => all.find(i => i.id === id))
            .filter(item => item && !comparisonList.find(i => i.id === item.id));

        if (itemsToAdd.length > 0) {
            const newItems = itemsToAdd.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                specs: { ...item.specs },
                category: item.category,
                type: item.type,
                image: item.image,
                rating: item.rating,
                verdict: item.verdict
            }));
            setComparisonList(prev => [...prev, ...newItems]);
        }
    };

    const removeItem = (id) => {
        setComparisonList(prev => prev.filter(item => item.id !== id));
    };

    const clearAll = () => {
        setComparisonList([]);
    };

    return (
        <ComparisonContext.Provider value={{ comparisonList, addToComparison, addToComparisonById, addToComparisonByIds, removeItem, clearAll }}>
            {children}
        </ComparisonContext.Provider>
    );
};

export const useComparison = () => {
    const context = useContext(ComparisonContext);
    if (!context) {
        throw new Error('useComparison must be used within a ComparisonProvider');
    }
    return context;
};
