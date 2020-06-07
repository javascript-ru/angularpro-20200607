web-push send-notification \
--endpoint="https://fcm.googleapis.com/fcm/send/eIIta5lfSOQ:APA91bE--yECFLU36cqRkEmA9EbdLHn2VHwk5c4Tejsly5sn5JYgnhLOx3nbyusJ3LaKdFcZXbbr4Dg4cXj24_vzn3iSXzjeqKS9PcYht5Vnrn9R2q-C0rjCqTgGy5IFBARP5CSrn_Qw" \
--key="BDYyAuMbtr1Ok1bgv1BPFZQYSadz4iBCFer_lm1a20JFdWkBoY6yVLy7oU-xSPZssTrbfgkMmwTg-1pnLZspZFg" \
--auth="KGtTbIJ4R2vItw_dGAoBRA" \
--payload='{"test":"123","notification":{"title":"TEST","body":"OH MY TEST"}}' \
--vapid-subject="http://localhost:8080" \
--vapid-pubkey="BNEO3LeLbUR2s3c9ooZ-JwUH_H20ZAw4XX808ObB4NIlVelmkyfIsLwICCbt1zg1ThtD6eUTPH1wnrRzWiKeXzo" \
--vapid-pvtkey="jLlwXKZCF7olZB9W1ETfFFqQVeEUlNz4ZRoYNQF-Ihg"
