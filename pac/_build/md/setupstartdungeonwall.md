# setupStartDungeonWall

Start to setup dungeon wall, some setup instructions e.g.[setupAddDungeonWall](./setupadddungeonwall.md) is called after this.

## Code Information

- **Name**: `setupStartDungeonWall`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 65 00`
- **Assembly Address in Memory** : `0x8920464`

## Parameters

This function is parameterless.


## Example

Here is one example as disassembled code:

```c
00000914  25166500:setupStartDungeonWall()
00000918  25166600:setupAddDungeonWall(2:20, 2:FFFFFFFF) //back of the base position
0000092C  25166600:setupAddDungeonWall(2:1, 2:FFFFFFFF) //celling
00000940  25166600:setupAddDungeonWall(2:1, 2:FFFFFFFF) //celling
00000954  25000700:cmd_mov(8:48, 80020.0)
00000968  25000700:cmd_mov(8:4A, 3393.0)
0000097C  25002B00:cmd_flgMov(2:E93, 2:D41)
00000990  25000300:cmd_call(1:D804)
00000998  25166600:setupAddDungeonWall(2:1, 2:FFFFFFFF) //more celling elements
000009AC  25166600:setupAddDungeonWall(2:1, 2:FFFFFFFF)
//...
00000AC4  25166600:setupAddDungeonWall(2:1, 2:FFFFFFFF) //until here
00000AD8  25000700:cmd_mov(8:48, 80021.0)
00000AEC  25166600:setupAddDungeonWall(2:14, 8:48)
00000B00  2516BD00:setGateInfo(2:0, 8:46, 2:0, 8:48)
00000B24  2516BD00:setGateInfo(2:0, 8:46, 2:1, 2:1)
00000B48  2516BD00:setGateInfo(2:0, 8:46, 2:2, 1:BD4)
00000B6C  25000C00:cmd_inc(8:46)
00000B78  25166600:setupAddDungeonWall(2:1, 2:FFFFFFFF)
00000B8C  25166600:setupAddDungeonWall(2:1, 2:FFFFFFFF)
00000BA0  25166600:setupAddDungeonWall(2:1F, 2:FFFFFFFF)
00000BB4  25166700:setupEndDungeonWall()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08920464(int param_1,undefined4 param_2)

{
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_089725f0(*(int *)(*(int *)(param_1 + 0x10) + 0x118) + 0x4320);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

