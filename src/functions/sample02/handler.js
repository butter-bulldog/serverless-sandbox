/**
 * DynamoDBの登録/更新/削除で起動するLambdaサンプル
 */

'use strict';

module.exports.sample02 = async event => {

  event.Records.forEach((record) => {
    console.log('イベント種別:', record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
/*
    {
      "ApproximateCreationDateTime": 1605098664,
      "Keys": {
      "code": {
        "S": "0001"
      },
      "created_at": {
        "S": "2020-11-11"
      }
    },
      "NewImage": {
      "code": {
        "S": "0001"
      },
      "created_at": {
        "S": "2020-11-11"
      }
    },
      "SequenceNumber": "100000000001458572863",
      "SizeBytes": 56,
      "StreamViewType": "NEW_IMAGE"
    }
*/

    if (record.eventName == 'INSERT') {
      //項目が追加された時の処理
      const newItem = record.dynamodb.NewImage;

    } else if(record.eventName == 'MODIFY') {

      //項目が変更された時の処理
      const oldItem = record.dynamodb.OldImage;//変更前
      const newItem = record.dynamodb.NewImage;//変更後

    } else if(record.eventName == 'REMOVE') {
      //項目が削除された時の処理
      const deletedItem = record.dynamodb.OldImage

    } else {

    }
  });

};
