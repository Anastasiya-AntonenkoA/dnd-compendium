"use client";

import { useState } from "react";
import bardData from "@/data/classes/bard/bard.json";
import bardFeatures from "@/data/classes/bard/features.json";

import creationFeatures from "@/data/classes/bard/subclasses/creation.json";
import eloquenseFeatures from "@/data/classes/bard/subclasses/eloquense.json";
import glamourFeatures from "@/data/classes/bard/subclasses/glamour.json";
import loreFeatures from "@/data/classes/bard/subclasses/lore.json";
import swordFeatures from "@/data/classes/bard/subclasses/sword.json";
import valorFeatures from "@/data/classes/bard/subclasses/valor.json";
import whispersFeatures from "@/data/classes/bard/subclasses/whispers.json";

export default function BardPage() {
    const [activeSubclass, setActiveSubclass] = useState<string | null>(null);
    const allFeaturesInfo = {
        ...bardFeatures, ...valorFeatures, ...creationFeatures, ...eloquenseFeatures, ...glamourFeatures,
        ...loreFeatures, ...swordFeatures, ...whispersFeatures
    };

    return (
    <div className="p-8 max-w-4xl mx-auto bg-white/90 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{bardData.name}</h1>
      
        <section className="mb-6">
            <h2 className="text-2xl font-semibold">Загальна інформація</h2>
            <ul className="list-disc ml-6">
                <li><strong>Кість хітів:</strong> {bardData.general.hitDice}</li>
                <li><strong>Рятувальні кидки:</strong> {bardData.general.savingThrows.join(", ")}</li>
            </ul>
        </section>
          
        <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-indigo-800">Оберіть Колегію:</h2>
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => setActiveSubclass(null)}
                    className={`px-4 py-2 rounded-full border transition ${
                    activeSubclass === null ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border-indigo-600"
                    }`}
                >
                    Без підкласу
                </button>
            
                {Object.values(bardData.subclasses).map((sub) => (
                    <button
                    key={sub.id}
                    onClick={() => setActiveSubclass(sub.id)}
                    className={`px-4 py-2 rounded-full border transition ${
                        activeSubclass === sub.id ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border-indigo-600"
                    }`}
                    >
                    {sub.name}
                    </button>
                ))}
            </div>
        </div>  

        <h2 className="text-2xl font-semibold mb-2">Таблиця рівнів</h2>
        <div className="overflow-x-auto border rounded-xl shadow-sm">
            <table className="w-full border-collapse bg-white">
            <thead>
                <tr className="bg-indigo-50 text-indigo-900 uppercase text-sm">
                <th className="border-b p-4 text-left w-20">Рівень</th>
                <th className="border-b p-4 text-left">Особливості</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(bardData.levelTable).map(([level, data]) => {
                // Отримуємо базові особливості класу
                const baseFeatures = data.features;
                const subclassData = activeSubclass ? bardData.subclasses[activeSubclass as keyof typeof bardData.subclasses] : null;
                
                // Отримуємо особливості підкласу для цього рівня (якщо обрано підклас)
                const subclassFeatures = subclassData 
                  ? (subclassData.featuresByLevel as Record<string, string[]>)[level] || [] : [];
                const totalFeatures = [...baseFeatures, ...subclassFeatures];

                return (
                    <tr key={level} className="hover:bg-slate-50 transition border-b last:border-0">
                    <td className="p-4 text-center font-bold text-indigo-600 bg-indigo-50/30">
                        {level}
                    </td>
                    <td className="p-4">
                        {totalFeatures.length > 0 ? (
                            <div className="flex flex-col gap-2">
                                {totalFeatures.map((featKey) => {
                                    const info = allFeaturesInfo[featKey as keyof typeof allFeaturesInfo];
                                    return (
                                        <details key={featKey} className="group cursor-pointer">
                                            <summary className="font-bold text-slate-800 list-none flex items-center gap-2">
                                                {/* Стрілочка, яка крутиться при відкритті */}
                                                <span className="text-[10px] transition-transform group-open:rotate-90">▶</span>
                                                {info?.name || featKey}
                                                {subclassFeatures.includes(featKey) && (
                                                    <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded border border-amber-200 uppercase tracking-wider">
                                                        Колегія
                                                    </span>
                                                )}
                                            </summary>
                                            <div className="mt-2 pl-4 text-sm text-slate-600 border-l-2 border-indigo-100 pb-2">
                                                {info?.description || "Опис уточнюється..."}
                                            </div>
                                        </details>
                                    );
                                })}
                            </div>
                        ) : (
                            <span className="text-slate-400">—</span>
                        )}
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>      
    </div>
  );
}