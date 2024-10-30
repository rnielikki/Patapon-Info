# multi_setTweet

Sends player loading status to the other player(s).

## Code Information

- **Name**: `multi_setTweet`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 33 00`
- **Assembly Address in Memory** : `0x894c9e8`

## Parameters

- `(int)phase` *(8 bytes)* : Expected 0~6. 0~3 is used while loading mission. Details in [example](./multi_gettweet.md#example).

## Example

Here is one example in hex:

```25 0a 33 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
multi_setTweet((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894c9e8(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  int iVar4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Save::Get_Save_BaseAddr(1);
  iVar3 = Save::Get_BaseAddr__0x78(uVar2,1);
  iVar4 = *(int *)(iVar3 + 100);
  iVar3 = Is_Multi(iVar4);
  if (iVar3 != 0) {
    FUN_089d1628(*(undefined4 *)(iVar4 + 0x18c),*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

