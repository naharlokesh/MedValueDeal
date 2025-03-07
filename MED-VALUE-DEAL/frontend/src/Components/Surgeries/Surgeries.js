
import styles from "./Surheries.module.css";

export default function Surgeries() {

    function copyNumber(phoneNumber) {
        navigator.clipboard.writeText(phoneNumber).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
    return (
        <>

            <div style={{ textAlign: 'center' }}>
                <br />
                <h4>Immediate help at your fingertips. Click on the numbers below to call an ambulance in an emergency<i class="bi bi-bandaid-fill"></i></h4>

                <h1 >Find Your City<i class="bi bi-search"></i></h1>
            </div>
            <div className={styles['btn-group']}>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Kolkata</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Haryana</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Bihar</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Pune</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Bengaluru</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Chennai</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Ahemdabad</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Surat</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Jaipur</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Lucknow</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Gorakhpur</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Kanpur</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Nagpur</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Indore</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Agra</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Moradabad </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Meerut</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Aligarh </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Kolhapur </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Asansol </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Udaipur </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Jamshedpur </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Amritsar </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Surat </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Shimla </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Ranchi </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Chandigarh </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Thiruvananthapuram </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Bhopal </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Maharashtra</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Nagaland</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Sikkim</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Tripura</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Uttarakhand</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Noida </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Siliguri </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Durgapur </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Dehradun </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Thane </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Guntur  </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Jalandhar  </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Thane </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Rourkela  </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Tirupati  </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>

                <div className={styles['first-aid-section']}>
                    <h2>First Aid Tips {"  "}<i class="bi bi-bandaid-fill"></i></h2>
                    <ul>
                        <li><strong>Heat Exhaustion:</strong> Move the person to a cooler place and have them lie down. Give small sips of water if they are conscious. Apply cool, wet cloths to their skin and fan them until they recover or help arrives.</li>
                        <li><strong>Poisoning:</strong> Identify the poison if possible and call emergency services. Do not induce vomiting unless instructed by a medical professional. Keep the person calm and monitor their condition.</li>
                        <li><strong>Choking:</strong> If someone is choking, perform the Heimlich maneuver. Stand behind the person, place your hands around their abdomen, and give quick, upward thrusts until the object is expelled.</li>
                        <li><strong>Burn Care:</strong> For minor burns, cool the area under running water for at least 10 minutes. Cover with a sterile, non-adhesive bandage. For severe burns, seek medical help immediately.</li>
                        <li><strong>CPR (Cardiopulmonary Resuscitation):</strong> If someone is unresponsive and not breathing, begin CPR. Push hard and fast in the center of the chest at a rate of 100-120 compressions per minute, and give rescue breaths if trained to do so.</li>
                        <li><strong>Severe Bleeding:</strong> Apply direct pressure to the wound with a clean cloth or bandage. Elevate the injured area if possible and maintain pressure until help arrives.</li>
                        <li><strong>Seizures:</strong> Protect the person from injury by removing nearby objects. Do not restrain them. Once the seizure stops, place them on their side to keep their airway clear and stay with them until they recover.</li>
                        <li><strong>Fractures:</strong> If you suspect a broken bone, immobilize the area using a splint or improvised materials. Support the injured limb and seek medical help as soon as possible.</li>
                        <li><strong>Anaphylaxis (Severe Allergic Reaction):</strong> Administer an epinephrine auto-injector if available and call emergency services. Assist the person in using their prescribed medication and monitor their breathing and consciousness.</li>
                        <li><strong>Shock:</strong> Lay the person down and elevate their legs slightly unless it causes pain or injury. Keep them warm and comfortable, and monitor their vital signs while waiting for help to arrive.</li>
                        <li><strong>Asthma Attack:</strong> Help the person sit upright and assist them in using their prescribed inhaler. If symptoms worsen or they have difficulty breathing, seek emergency medical attention.</li>
                        <li><strong>Stroke:</strong> Recognize the signs of a stroke (face drooping, arm weakness, speech difficulty), and call emergency services immediately. Keep the person calm and reassure them while waiting for help.</li>
                        <li><strong>Heart Attack:</strong> Call emergency services and help the person sit or lie down in a comfortable position. If they are conscious and not allergic, assist them in taking aspirin to help thin the blood.</li>
                    </ul>
                </div>
            </div>


        </>
    );
}
