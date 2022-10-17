# Pull Request Validator

validate your pull request with custom rule using yaml config file.

```yaml
version: v1
branch:
  base: feature/LSP-12345/some-feature-branch
  reviewer:
   - surya-apty
   - soni
  projects:
    - admin
    - player
  owners:
    admin: surya-apty 
    player: soni
  meta:
    maxLength: 150
    shouldIncludeTicketNo: true
    ticketRegex: /\[\s(CB|LSP)-\d+\s\]/g
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
<img width="1280" alt="Screenshot 1944-07-25 at 5 02 52 PM" src="https://user-images.githubusercontent.com/85492089/196166795-ff88db1c-7cbf-41ea-b0a7-d1ae86206736.png">
