import { stats, infoCards } from "@/lib/data";

export default function MiscPage() {
  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {stat.label}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-3">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 border-t border-gray-100 pt-3">
                <span className="font-medium">Source:</span> {stat.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Cards Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {infoCards.map((card) => (
            <div
              key={card.id}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
