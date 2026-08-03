import { statistics } from '@/data/statistics';
import { formatNumber } from '@/utils/formatters';
import './Home.css';

/**
 * Statistics section.
 */
function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container stats-section__grid">
        {statistics.map((stat) => (
          <div key={stat.id} className="stats-section__item">
            <span className="stats-section__value">
              {formatNumber(stat.value)}+
            </span>
            <span className="stats-section__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
