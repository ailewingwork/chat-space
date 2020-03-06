# chat-space DB設計

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|group_id|string|null: false,foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :groups :through: :groups_users
- has_many :messages
- has_many :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|string||
|image|string||
|group_id|string|null: false,foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many : messages
- has_many :groups_users
- has_many :user :through: :groups_users