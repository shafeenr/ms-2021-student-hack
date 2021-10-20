import logging
import azure.functions as func

from pymongo import MongoClient
from bson.json_util import dumps


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    url = "mongourl"

    name = req.params.get('name')
    logging.info(name)
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')
    logging.info(name)
    
    if name:
        client = MongoClient(url)
        json_data = dumps(list(client["msstudent2021"][name].find()))
        logging.info(json_data)
        return func.HttpResponse(json_data)
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )
