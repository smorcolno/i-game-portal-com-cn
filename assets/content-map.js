// 站点内容分区与搜索模块
const contentMap = {
  site: "https://i-game-portal.com.cn",
  tagline: "爱游戏 - 探索无限乐趣",
  sections: [
    {
      id: "action",
      title: "动作冒险",
      keywords: ["爱游戏", "动作", "冒险", "战斗"],
      items: [
        { name: "失落遗迹", tags: ["冒险", "探索"] },
        { name: "街头格斗", tags: ["动作", "比赛"] }
      ]
    },
    {
      id: "puzzle",
      title: "益智解谜",
      keywords: ["爱游戏", "解谜", "逻辑", "脑力"],
      items: [
        { name: "数字迷阵", tags: ["数学", "逻辑"] },
        { name: "图形重组", tags: ["视觉", "解谜"] }
      ]
    },
    {
      id: "simulation",
      title: "模拟经营",
      keywords: ["爱游戏", "模拟", "建造", "策略"],
      items: [
        { name: "梦幻农场", tags: ["经营", "种植"] },
        { name: "城市蓝图", tags: ["建造", "规划"] }
      ]
    }
  ]
};

// 搜索过滤器：根据关键词匹配分区内容
function searchByKeyword(keyword) {
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  for (const section of contentMap.sections) {
    const matches = section.items.filter(item =>
      item.tags.some(tag => tag.toLowerCase().includes(lowerKeyword)) ||
      item.name.toLowerCase().includes(lowerKeyword) ||
      section.keywords.some(kw => kw.toLowerCase().includes(lowerKeyword))
    );
    if (matches.length > 0) {
      results.push({
        section: section.title,
        items: matches
      });
    }
  }
  return results;
}

// 获取所有分区标签（去重）
function getAllTags() {
  const tagSet = new Set();
  for (const section of contentMap.sections) {
    for (const item of section.items) {
      item.tags.forEach(tag => tagSet.add(tag));
    }
  }
  return Array.from(tagSet);
}

// 示例：使用搜索功能（不执行外部请求）
const demoSearch = searchByKeyword("冒险");
console.log("搜索示例:", demoSearch);

// 导出供其他模块使用（如支持）
if (typeof module !== "undefined" && module.exports) {
  module.exports = { contentMap, searchByKeyword, getAllTags };
}