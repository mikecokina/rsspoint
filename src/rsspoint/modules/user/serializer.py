def user_serializer(instance):
    return {"username": instance.username, "id": instance.id}
