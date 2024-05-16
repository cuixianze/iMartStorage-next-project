// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       <ul>
//         <li><Link href="/storage/1">라면 창고</Link></li>
//         <li><Link href="/storage/2">봉지과자 창고</Link></li>
//         <li><Link href="/storage/3">각과자 창고</Link></li>
//         <li><Link href="/storage/4">냉장 창고</Link></li>
//         <li><Link href="/storage/5">냉동 창고</Link></li>
//       </ul>
     
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Warehouse List</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link href="/storage/1" style={styles.link}>라면 창고</Link>
        </li>
        <li style={styles.listItem}>
          <Link href="/storage/2" style={styles.link}>봉지과자 창고</Link>
        </li>
        <li style={styles.listItem}>
          <Link href="/storage/3" style={styles.link}>각과자 창고</Link>
        </li>
        <li style={styles.listItem}>
          <Link href="/storage/4" style={styles.link}>냉장 창고</Link>
        </li>
        <li style={styles.listItem}>
          <Link href="/storage/5" style={styles.link}>냉동 창고</Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    padding: '10px 15px',
    borderRadius: '4px',
    backgroundColor: '#e9ecef',
    display: 'block',
    transition: 'background-color 0.3s, color 0.3s',
  },
  linkHover: {
    backgroundColor: '#007BFF',
    color: '#fff',
  }
};


