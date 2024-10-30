# setMessageColor

Sets the colour of the [sysytemMessage](./sysytemmessage.md).

## Code Information

- **Name**: `setMessageColor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 03 07 00`
- **Assembly Address in Memory** : `0x892c654`

## Parameters

- `(int)red` *(8 bytes)* : Red, in range of **0~255**.
- `(int)green` *(8 bytes)* : Green, in range of **0~255**.
- `(int)blue` *(8 bytes)* : Blue, in range of **0~255**.
- `(int)alpha` *(8 bytes)* : (Supposed to be) alpha in range of **0~255**, but **does not work**.

## Example

Here is one example in hex:

```25 03 07 00 / 02 00 00 00 / dc 00 00 00 / 02 00 00 00 / dc 00 00 00 / 02 00 00 00 / fa 00 00 00 / 02 00 00 00 / ff 00 00 00```

Which is interpreted as:

```c
setMessageColor((int)220, (int)220, (int)250, (int)255)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892c654(int param_1,undefined4 param_2)

{
  undefined *puVar1;
  undefined *puVar2;
  undefined *puVar3;
  undefined *puVar4;
  
  puVar1 = (undefined *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined *)Pac_Get_Param(param_2,3,1,4);
  *(uint *)(param_1 + 0x23c) = CONCAT13(*puVar4,CONCAT12(*puVar3,CONCAT11(*puVar2,*puVar1)));
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

