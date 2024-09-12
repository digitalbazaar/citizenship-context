# @digitalbazaar/citizenship-context ChangeLog

## 4.0.0 - 2024-09-12

### Added
- Support v2 and v3 contexts from vocab repo.
- Export experimental `contextsMetadata` Map with extra info about contexts.
  - Current use is a `fileUrl` property for local context file.

### Changed
- **BREAKING**: Rename NPM package from `citizenship-context` to
  `@digitalbazaar/citizenship-context`.
- **BREAKING**: Only support Node.js >= 18.
- **BREAKING**: Convert to ESM. A built CJS file is distributed.
- Move code from `js/` to `lib/`.
- Update dependencies and tooling.

### Removed
- **BREAKING**: Remove `constants` and direct URL and context exports.
  - Expectation is the `contexts` Map will be used directly with known context
    URLs or as a source of contexts to use with a JSON-LD context loader.

## 3.0.0 - 2020-04-13

### Added
- Add `identifier` term.

## 2.0.0 - 2020-02-19

### Changed
- **BREAKING**: Update context to match latest spec.

## 1.0.0 - 2020-01-24

See git history for changes previous to this release.
