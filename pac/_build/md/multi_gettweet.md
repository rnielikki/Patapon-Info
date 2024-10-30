# multi_getTweet

Loads other players' loading status in multi.

## Code Information

- **Name**: `multi_getTweet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 34 00`
- **Assembly Address in Memory** : `0x894ca70`

## Parameters

- `(int)player_index` *(8 bytes)* : Index of the player in multi. expected 0~3, host is 0.
- `(int)phase` *(8 bytes)* : Expected 0~6. 0~3 is used while loading mission. Details in [example](#example).

## Example

Here is one example in hex:

```25 0a 34 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 10 00 00 00```

Which is interpreted as:

```c
multi_getTweet((int *)iVar0, (int *)iVar16)
```

This shows speech bubbles while other player is waiting:

```c
00011BC4  250A3400:multi_getTweet(4:0, 4:10)
/* player is ready. */
00011BD8  25001700:cmd_ifEQ(4:10, 1.0, 1:11C6C)
/* player is viewing event. */
00011BF0  25001700:cmd_ifEQ(4:10, 2.0, 1:11D04)
/* player is reading tips */
00011C08  25001700:cmd_ifEQ(4:10, 3.0, 1:11D9C)
/* player is checking treasure chests. */
00011C20  25001700:cmd_ifEQ(4:10, 4.0, 1:11E34)
/* player is checking results. */
00011C38  25001700:cmd_ifEQ(4:10, 5.0, 1:11ECC)
/* player is loading data. */
00011C50  25001700:cmd_ifEQ(4:10, 6.0, 1:11F64)
00011C68  25000100:cmd_end()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894ca70(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar3 = Save::Get_Save_BaseAddr(1);
  iVar4 = Save::Get_BaseAddr__0x78(uVar3,1);
  iVar4 = FUN_089d13bc(*(undefined4 *)(*(int *)(iVar4 + 100) + 0x18c),*puVar1);
  *puVar2 = *(undefined4 *)(iVar4 + 0x10);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

