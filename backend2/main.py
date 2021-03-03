from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/api2")
def read_root():
    return {"Hello": "World"}


@app.get("/api2/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}