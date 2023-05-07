import suchEmpty from '@/assets/img/such_empty.png';
import '@/assets/styles/Empty.css';

export default function Empty({ label = 'No Data' }) {
  return (
    <div className="empty-placeholder">
      <img src={suchEmpty} alt="no data" />
      <h3>
        {label}
        <br />
        (╯°□°)╯︵ ┻━┻
      </h3>
    </div>
  );
}
