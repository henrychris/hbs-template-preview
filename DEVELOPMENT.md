# Development Notes

Internal reference for maintainers. Not intended for external contributors.

## Git workflow

### Branch structure

| Branch                  | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `master`                | Production                               |
| `development`           | Staging — deployed on Railway            |
| `feat/*`, `fix/*`, etc. | Feature branches, cut from `development` |

### Starting a new feature

```bash
git checkout development
git pull origin development
git checkout -b feat/your-feature
```

### Merging

1. Raise a PR from your feature branch → `development`, squash merge.
2. Raise a PR from `development` → `master`, squash merge.

### After a `development` → `master` merge

Rebase `development` onto `master` — do **not** back-merge.

```bash
git checkout development
git pull origin development
git rebase origin/master
git push --force-with-lease origin development
```
