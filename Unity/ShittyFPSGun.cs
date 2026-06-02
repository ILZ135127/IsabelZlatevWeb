using UnityEngine;

/// <summary>
/// Put this on your FPS camera (child of player).
/// Right-click = pew pew.
///
/// Setup (2 min):
/// 1. Create empty "Bullet" → add Sphere (scale 0.2) → add Rigidbody → add ShittyBullet.cs → drag to Project = prefab.
/// 2. On camera: add this script, assign Bullet Prefab + Fire Point (empty in front of camera).
/// 3. Play. Hold right mouse to spray badly.
/// </summary>
public class ShittyFPSGun : MonoBehaviour
{
    [Header("Assign in Inspector")]
    public GameObject bulletPrefab;
    public Transform firePoint;

    [Header("How bad is it")]
    public float bulletSpeed = 40f;
    public float fireRate = 8f; // shots per second while held
    public float spread = 2f;   // degrees of random inaccuracy

    float nextShotTime;

    void Update()
    {
        if (bulletPrefab == null || firePoint == null)
            return;

        if (!Input.GetMouseButton(1))
            return;

        if (Time.time < nextShotTime)
            return;

        nextShotTime = Time.time + 1f / fireRate;
        Shoot();
    }

    void Shoot()
    {
        Vector3 dir = firePoint.forward;
        dir = Quaternion.Euler(
            Random.Range(-spread, spread),
            Random.Range(-spread, spread),
            0f
        ) * dir;

        GameObject bullet = Instantiate(bulletPrefab, firePoint.position, Quaternion.LookRotation(dir));
        Rigidbody rb = bullet.GetComponent<Rigidbody>();
        if (rb != null)
            rb.velocity = dir.normalized * bulletSpeed;
    }
}
