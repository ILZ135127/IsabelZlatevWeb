using UnityEngine;

/// <summary>
/// Goes on the bullet prefab. Deletes itself after a bit.
/// Optional: tag stuff "Enemy" and it'll try to delete them too.
/// </summary>
public class ShittyBullet : MonoBehaviour
{
    public float lifeTime = 3f;

    void Start()
    {
        Destroy(gameObject, lifeTime);
    }

    void OnCollisionEnter(Collision hit)
    {
        // don't delete the player if you tagged them
        if (hit.gameObject.CompareTag("Player"))
            return;

        if (hit.gameObject.CompareTag("Enemy"))
            Destroy(hit.gameObject);

        Destroy(gameObject);
    }
}
