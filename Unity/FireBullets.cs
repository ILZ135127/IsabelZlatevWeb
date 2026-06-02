using UnityEngine;

public class FireBullets : MonoBehaviour
{
    public GameObject bulletPrefab;
    public Transform firePoint;
    public float speed = 50f;
    public float fireRate = 10f;

    float nextFire;

    void Update()
    {
        if (!Input.GetMouseButton(1))
            return;
        if (bulletPrefab == null || firePoint == null)
            return;
        if (Time.time < nextFire)
            return;

        nextFire = Time.time + 1f / fireRate;

        GameObject b = Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);
        Rigidbody rb = b.GetComponent<Rigidbody>();
        if (rb != null)
            rb.velocity = firePoint.forward * speed;
    }
}
