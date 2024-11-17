import styles from "./Statistics.module.css";
const User = ({ user, i }) => {
  return (
    <tr className={styles.row}>
      <td>
        <span>{i + 1}</span>
      </td>
      <td className={styles.fullname}>
        <span>{user.first_name.toLowerCase()}</span>
      </td>
      <td className={styles.phone}>
        <span>+{user.phone_number}</span>
      </td>
      <td className={styles.age}>
        <span>{user.year_old}</span>
      </td>
      <td className={styles.score}>
        <span>{user.correctAnswersCount}</span>
      </td>
      <td className={styles.address}>
        <span>{user.region.toLowerCase()}</span>
      </td>
    </tr>
  );
};

export default User;
