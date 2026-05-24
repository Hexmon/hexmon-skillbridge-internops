from pydantic import BaseModel


class Settings(BaseModel):
    app_env: str = "development"
    database_url: str = "sqlite:///./skillbridge.db"
    ai_provider: str = "none"
    frontend_api_base_url: str = "http://localhost:8000"


settings = Settings()
