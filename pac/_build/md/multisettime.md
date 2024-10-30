# multiSetTime

Sets time limit for the VS game.

## Code Information

- **Name**: `multiSetTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 14 00`
- **Assembly Address in Memory** : `0x891a08c`

## Parameters

- `(float)time` *(8 bytes)* : VS time limit to set as seconds. -1 is unlimited time.

## Example

Here is one example in hex:

```25 16 14 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
multiSetTime((float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891a08c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  func_0x08b2ed20(*puVar1,*(undefined4 *)
                           (*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x58));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

