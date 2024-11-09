import styles from "./Statistics.module.css";
const User = ({ student, i }) => {
  return (
    <tr className={styles.row}>
      <td>
        <span>{i + 1}</span>
      </td>
      <td className={styles.fullname}>
        <span>Azimjon Jalilov</span>
      </td>
      <td className={styles.phone}>
        <span>+998974581122</span>
      </td>
      <td className={styles.age}>
        <span>17</span>
      </td>
      <td className={styles.score}>
        <span>15</span>
      </td>
      <td className={styles.address}>
        <span>Namangan</span>
      </td>
    </tr>
  );
};

export default User;
