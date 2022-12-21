# How to use k3s to deploy express-postgres-ts-starter

## deploy

open the `deplyoments/k3s` in the terminal.

create namespace:

```bash
kubectl apply -f namespace.yaml
```

create postgres:

```bash
kubectl apply -f postgres.yaml
```

create redis:

```bash
kubectl apply -f redis.yaml
```

create minio:

```bash
kubectl apply -f minio.yaml
```

create application config:

```bash
kubectl apply -f config.yaml
```

deploy `express-postgres-ts-starter`

```bash
kubectl apply -f app.yaml
```

show all the pod status:

```bash
kubectl get pods -n express-postgres-ts-starter-namespace
```

you will see:

```bash
NAME                                          READY   STATUS    RESTARTS   AGE
express-postgres-ts-starter-649d5b778-fxwcw   1/1     Running   0          11s
minio-0                                       1/1     Running   0          20m
postgres-0                                    1/1     Running   0          73m
redis-0                                       1/1     Running   0          47m
```

setup cron job

```bash
kubectl apply -f job.yaml
```

wait for 15 minutes, then:

```bash
kubectl get job -n express-postgres-ts-starter-namespace
```

you will see:

```bash
NAME                    COMPLETIONS   DURATION   AGE
graphql-ping-27860175   1/1           41s        3m9s
ping-27860175           1/1           36s        3m9s
```

if you want to remove the resources:

```bash
kubectl delete -f namespace.yaml
```
