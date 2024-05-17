import { Search } from 'lucide-react';

import styles from './styles.module.css';

function Dashboard() {
  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.dashboardContainerHeader}>
        <h1>Agendamentos</h1>
        <div className={styles.dashboardContainerInput}>
          <Search size={25} color="#aaff" strokeWidth={2} />
          <input type="text" placeholder="Buscar..." />
        </div>
      </div>
      <div className={styles.dashboardContainerCard}>
        <p>
          <strong>Cliente:</strong> João Antônio
        </p>
        <p>
          <strong>Serviço:</strong> Corte de cabelo
        </p>
        <p>
          <strong>Data e hora:</strong> 22/09/2003 - 13:30
        </p>
        <p>
          <strong>Status:</strong> Agendado
        </p>
        <p>
          <strong>Barbeiro:</strong> Luiz
        </p>
      </div>
      <div className={styles.dashboardContainerCard}>
        <p>
          <strong>Cliente:</strong> João Antônio
        </p>
        <p>
          <strong>Serviço:</strong> Corte de cabelo
        </p>
        <p>
          <strong>Data e hora:</strong> 22/09/2003 - 14:00
        </p>
        <p>
          <strong>Status:</strong> Agendado
        </p>
        <p>
          <strong>Barbeiro:</strong> José
        </p>
      </div>
    </main>
  );
}

export default Dashboard;
