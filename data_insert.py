# data cleaning
# data preprocessing
# data insertion
# script for insertion

from datetime import datetime
from elasticsearch import Elasticsearch
es = Elasticsearch()

res = es.index(index="hack", doc_type='tweet', id=1, body=doc)
