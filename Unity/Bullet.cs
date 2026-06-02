using UnityEngine;

public class Bullet : MonoBehaviour
{
    public float destroyAfter = 3f;

    void Start()
    {
        Destroy(gameObject, destroyAfter);
    }

    void OnCollisionEnter(Collision other)
    {
        Destroy(gameObject);
    }
}
