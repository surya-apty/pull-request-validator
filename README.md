# Pull Request Validator

validate your pull request with custom rule using yaml config file.

```yaml
version: v1
branch:
  projects:
    - admin
    - player
  owners:
    admin: surya-apty 
    player: soni
  meta:
    maxLength: 100
  rules:
    - 
      name: 'Should include ticket no'
      regex: /\[\s(CB|LSP)-\d+\s\]/g
```

For example you could include a rule like pull request heading should contain ticket no using a regex expression in the configuration file as shown above.


| Valid                          | Invalid           | Reason               |
|--------------------------------|-------------------|----------------------|
| [ LSP-1234 ] Heading of the PR | Heading of the PR | Ticket No is missing |

# Install Dependency  

```sh
npm install
```

# Build Project

```sh
npm run build
```
# Local Link
```sh
npm link
``` 
# Package it
```sh
npm run package
```